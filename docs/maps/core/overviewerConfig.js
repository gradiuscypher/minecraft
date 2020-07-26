var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "base": "",
            "isOverlay": false,
            "maxZoom": 9,
            "zoomLevels": 9,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "poititle": "Markers",
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "last_rendertime": 1595746801,
            "north_direction": 0,
            "world": "Core01",
            "defaultZoom": 1,
            "imgextension": "png",
            "minZoom": 0
        }
    ],
    "map": {
        "controls": {
            "pan": true,
            "overlays": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true,
            "spawn": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1595747000",
        "debug": true
    }
};
