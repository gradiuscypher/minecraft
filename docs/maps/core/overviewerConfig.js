var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1597129282",
        "controls": {
            "pan": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "overlays": true,
            "zoom": true,
            "coordsBox": true
        },
        "debug": true
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "path": "day",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "maxZoom": 10,
            "zoomLevels": 10,
            "minZoom": 0,
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "showlocationmarker": true,
            "imgextension": "png",
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597129080,
            "base": "",
            "defaultZoom": 1,
            "poititle": "Markers"
        }
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    }
};
