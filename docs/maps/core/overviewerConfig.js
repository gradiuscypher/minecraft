var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "zoomLevels": 10,
            "imgextension": "png",
            "showlocationmarker": true,
            "isOverlay": false,
            "base": "",
            "name": "Daytime Render",
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "path": "day",
            "maxZoom": 10,
            "world": "Core01",
            "north_direction": 0,
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1599580680
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599580886",
        "controls": {
            "overlays": true,
            "pan": true,
            "spawn": true,
            "zoom": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true
        }
    }
};
