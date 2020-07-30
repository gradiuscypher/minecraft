var overviewerConfig = {
    "tilesets": [
        {
            "north_direction": 0,
            "isOverlay": false,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "world": "Core01",
            "zoomLevels": 10,
            "maxZoom": 10,
            "path": "day",
            "poititle": "Markers",
            "defaultZoom": 1,
            "last_rendertime": 1596099480,
            "base": "",
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ]
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "compass": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true,
            "mapType": true
        },
        "cacheTag": "1596099683"
    }
};
