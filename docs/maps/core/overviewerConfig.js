var overviewerConfig = {
    "map": {
        "debug": true,
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "pan": true,
            "overlays": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1597172482"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "base": "",
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "path": "day",
            "last_rendertime": 1597172280,
            "isOverlay": false,
            "north_direction": 0,
            "poititle": "Markers",
            "showlocationmarker": true,
            "imgextension": "png",
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "defaultZoom": 1
        }
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png"
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    }
};
