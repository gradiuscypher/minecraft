var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "isOverlay": false,
            "base": "",
            "defaultZoom": 1,
            "minZoom": 0,
            "world": "Core01",
            "maxZoom": 10,
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "name": "Daytime Render",
            "imgextension": "png",
            "poititle": "Markers",
            "last_rendertime": 1596664680
        }
    ],
    "map": {
        "cacheTag": "1596664882",
        "debug": true,
        "controls": {
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "pan": true
        },
        "north_direction": "lower-left"
    }
};
