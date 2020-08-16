var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "world": "Core01",
            "path": "day",
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "poititle": "Markers",
            "maxZoom": 10,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1597575480,
            "defaultZoom": 1,
            "zoomLevels": 10,
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "minZoom": 0,
            "name": "Daytime Render",
            "imgextension": "png"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "compass": true,
            "spawn": true,
            "zoom": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        },
        "cacheTag": "1597575683"
    }
};
