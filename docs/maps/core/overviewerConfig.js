var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "image": {
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "north_direction": 0,
            "minZoom": 0,
            "isOverlay": false,
            "world": "Core01",
            "maxZoom": 9,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "showlocationmarker": true,
            "path": "day",
            "zoomLevels": 9,
            "last_rendertime": 1594886280
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1594886502",
        "debug": true,
        "controls": {
            "overlays": true,
            "pan": true,
            "spawn": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true
        }
    }
};
