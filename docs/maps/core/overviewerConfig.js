var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599609687",
        "debug": true,
        "controls": {
            "coordsBox": true,
            "overlays": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "pan": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "path": "day",
            "isOverlay": false,
            "north_direction": 0,
            "world": "Core01",
            "name": "Daytime Render",
            "maxZoom": 10,
            "imgextension": "png",
            "minZoom": 0,
            "zoomLevels": 10,
            "base": "",
            "last_rendertime": 1599609480,
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a"
        }
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        },
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    }
};
