var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        }
    },
    "tilesets": [
        {
            "north_direction": 0,
            "minZoom": 0,
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "imgextension": "png",
            "poititle": "Markers",
            "last_rendertime": 1599101779,
            "zoomLevels": 8,
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "defaultZoom": 1,
            "path": "day",
            "isOverlay": false,
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "overlays": true,
            "coordsBox": true,
            "spawn": true,
            "mapType": true,
            "compass": true
        },
        "cacheTag": "1599102168",
        "debug": true
    },
    "worlds": [
        "world"
    ]
};
