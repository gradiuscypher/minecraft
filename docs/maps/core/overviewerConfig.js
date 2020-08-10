var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "zoomLevels": 10,
            "defaultZoom": 1,
            "minZoom": 0,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "path": "day",
            "base": "",
            "north_direction": 0,
            "last_rendertime": 1597049880,
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "name": "Daytime Render",
            "isOverlay": false,
            "maxZoom": 10,
            "bgcolor": "#1a1a1a"
        }
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "mapType": true,
            "pan": true,
            "overlays": true,
            "spawn": true,
            "zoom": true,
            "coordsBox": true
        },
        "debug": true,
        "cacheTag": "1597050081"
    }
};
